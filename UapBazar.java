public class UapBazar {
    public static void main(String[] args) {
     Product Sample=new Product("Sample","#405","Category",100f);
     Sample.display();
     Sample.updatePrice(600f);
     Sample.display();
     double discountedPrice=Sample.getDiscountedPrice(20);
     System.out.println("Discounted Price "+discountedPrice);   
    }
}
