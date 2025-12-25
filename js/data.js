const products = [
    {
        id: 1,
        name: "Classic Linen Shirt",
        category: "men",
        price: 4500,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop",
        description: "Premium quality linen shirt perfect for the tropical climate. Breathable and stylish.",
        featured: true,
        new: false
    },
    {
        id: 2,
        name: "Heritage Batik Saree",
        category: "women",
        price: 12500,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        description: "Handcrafted batik saree featuring traditional Sri Lankan motifs with a modern twist.",
        featured: true,
        new: true
    },
    {
        id: 3,
        name: "Gold Chronograph Watch",
        category: "watches",
        price: 25000,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
        description: "Elegant gold-tone chronograph watch for the modern gentleman.",
        featured: true,
        new: false
    },
    {
        id: 4,
        name: "Leather Loafers",
        category: "shoes",
        price: 8900,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1000&auto=format&fit=crop",
        description: "Genuine leather loafers, hand-stitched for durability and comfort.",
        featured: false,
        new: true
    },
    {
        id: 5,
        name: "Gemstone Pendant Necklace",
        category: "accessories",
        price: 5500,
        image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop",
        description: "A delicate necklace featuring a semi-precious stone found in Sri Lanka.",
        featured: false,
        new: true
    },
    {
        id: 6,
        name: "Modern Kurta Top",
        category: "women",
        price: 3200,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1000&auto=format&fit=crop",
        description: "Contemporary kurta top suitable for casual and semi-formal occasions.",
        featured: true,
        new: false
    }
];

const categories = [
    { id: 'men', name: "Men's Wear", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop" },
    { id: 'women', name: "Women's Wear", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop" },
    { id: 'watches', name: "Watches", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop" },
    { id: 'shoes', name: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" },
];

export { products, categories };
