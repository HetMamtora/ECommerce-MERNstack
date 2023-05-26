const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//CREATE NEW ORDER
exports.newOrder = catchAsyncErrors(async(req,res,next)=>{

    const{
        shippingInfo, 
        orderItems, 
        paymentInfo, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo, 
        orderItems, 
        paymentInfo, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success:true,
        order,
    })
});


// GET SINGLE ORDER
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );
  
    if (!order) {
        return next(new ErrorHander("Order not found with this Id", 404));
    }
  
    res.status(200).json({
        success: true,
        order,
    });
  });
  
  // GET LOGGED IN USER ORDER
  exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
  
    res.status(200).json({
        success: true,
        orders,
    });
  });


  // ADMIN --- GET ALL ORDERS
  exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount=0;

    orders.forEach(order=>{
        totalAmount+=order.totalPrice;
    });
  
    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
  });


   // ADMIN --- UPDATE ORDER STATUS
   exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHander("Order not found with this Id", 404));
    }

    if(order.orderStatus==="Delivered"){
        return next(new ErrorHander("You have already delivered this order", 404));
    }

    order.orderItems.forEach(async (order)=>{
        await updateStock(order.product,order.quantity);
    });

    order.orderStatus = req.body.status;
    
    if(req.body.status==="Delivered"){
        order.deliveredAt = Date.now()
    }

    await order.save({validateBeforeSave:false});

    res.status(200).json({
        success: true,
        order,
    });
  });

  async function updateStock(id,quantity){
    const product = await Product.findById(id);

    product.stock -=quantity;

    await product.save({validateBeforeSave:false});
  }


    // ADMIN --- DELETE ORDER
    exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
        const order = await Order.findById(req.params.id);
      
        if (!order) {
            return next(new ErrorHander("Order not found with this Id", 404));
        }
      
        await order.remove();
      
        res.status(200).json({
            success: true,
        });
      });