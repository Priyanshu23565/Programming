print("🍽️ Welcome to REstaurant Management System")
print("🧾 MENU:")
print("1. Chole Bhature         - ₹250 (Full), ₹100 (Half)")
print("2. Paneer Butter Masala  - ₹300 (Full), ₹150 (Half)")
print("3. Dal Makhani           - ₹200 (Full), ₹100 (Half)")
print("4. Veg Biryani           - ₹180 (Full), ₹90 (Half)")
print("5. Rajma Chawal          - ₹220 (Full), ₹110 (Half)")

choice = input("\nEnter your choice (1-5): ")

item_name = ""
full_price = 0
half_price = 0

if choice == '1':
    item_name = "Chole Bhature"
    full_price = 250
    half_price = 100
elif choice == '2':
    item_name = "Paneer Butter Masala"
    full_price = 300
    half_price = 150
elif choice == '3':
    item_name = "Dal Makhani"
    full_price = 200
    half_price = 100
elif choice == '4':
    item_name = "Veg Biryani"
    full_price = 180
    half_price = 90
elif choice == '5':
    item_name = "Rajma Chawal"
    full_price = 220
    half_price = 110
else:
    print("⚠️ Invalid choice. Please run again.")
    exit()

full_qty = int(input(f"Enter number of Full plates of {item_name}: "))
half_qty = int(input(f"Enter number of Half plates of {item_name}: "))

full_total = full_qty * full_price
half_total = half_qty * half_price
total = full_total + half_total

# Print Bill Slip
print("\n" + "="*30)
print("🧾         BILL RECEIPT        ")
print("="*30)
print(f"Item: {item_name}")
print(f"Full Plates  x {full_qty} @ ₹{full_price} = ₹{full_total}")
print(f"Half Plates  x {half_qty} @ ₹{half_price} = ₹{half_total}")
print("-"*30)
print(f"Total Bill Amount: ₹{total}")
print("="*30)
print("🙏 Thank you! Visit again!")
print("="*30)
