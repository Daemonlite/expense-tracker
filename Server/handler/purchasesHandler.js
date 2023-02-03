const Purchases = require('../models/purchaseSchema')

const getPurchases = async (req,res) => {
    const purchases = await Purchases.find({purchase:Purchases})

    if(purchases){
        return res.status(200).json(purchases)
    }else{
        return res.status(404).json({message:"You have no purchases"})
    }
}

const createPurchase = async (req,res) => {
    const {item,price,date,expenseCategory,user} = req.body

    if(!item || !price || !date || !expenseCategory || !user){
        res.status(400).json({message:"enter required fields"})
    }

    const purchase = await Purchases.create({
        item,
        price,
        date,
        expenseCategory,
        user
    })

    if(purchase){
        res.status(201).json(purchase)
    }else{
        res.status(400).json({message:"an error ocurred try again"})
    }
}

const updatePurchase = async (req, res) => {
    const PurchaseId = req.params.id;
    const updatedPurchase = req.body;
  
    const upPurchase = await Purchases.findByIdAndUpdate(PurchaseId, updatedPurchase, { new: true });
  
    if (!upPurchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }
  
    res.status(200).json(upPurchase);
  }
  
  const deletePurchase= async (req, res) => {
    const purchaseId = req.params.id;
  
    const purchase = await Purchases.findByIdAndDelete( purchaseId);
  
    if (!purchase) {
      return res.status(404).json({ message: " purchasenot found" });
    }
  
    res.status(200).json({ message: " purchase deleted successfully" });
  }

module.exports = {
    getPurchases,
    createPurchase,
    updatePurchase,
    deletePurchase
}