
public class Product {

    String name, id, category;
    double price;

    Product(String name, String id, String category, double price) {
        this.name = name;
        this.id = id;
        this.category = category;
        this.price = price;
    }

    public void updatePrice(double newPrice) {
        price = newPrice;
    }

    public double getPrice() {
        return price;
    }

    public double getDiscountedPrice(double discountPercentage) {
        return price - ((price * discountPercentage) / 100);
    }

    public void display() {
        System.out.println("Price " + price);
    }
}
