print("🍽️ Welcome to REstaurant Management System")
print("🧾 MENU:")
print("1. Chole Bhature         - ₹250 (Full), ₹100 (Half)")
print("2. Paneer Butter Masala  - ₹300 (Full), ₹150 (Half)")
print("3. Dal Makhani           - ₹200 (Full), ₹100 (Half)")
print("4. Veg Biryani           - ₹180 (Full), ₹90 (Half)")
print("5. Rajma Chawal          - ₹220 (Full), ₹110 (Half)")

choice = input("\nEnter your choice (1-5): ")

if choice == '1':
    full = int(input("Enter Full plates of Chole Bhature: "))
    half = int(input("Enter Half plates of Chole Bhature: "))
    total = (full * 250) + (half * 100)
    print(f"Total Bill: ₹{total}")

elif choice == '2':
    full = int(input("Enter Full plates of Paneer Butter Masala: "))
    half = int(input("Enter Half plates of Paneer Butter Masala: "))
    total = (full * 300) + (half * 150)
    print(f"Total Bill: ₹{total}")

elif choice == '3':
    full = int(input("Enter Full plates of Dal Makhani: "))
    half = int(input("Enter Half plates of Dal Makhani: "))
    total = (full * 200) + (half * 100)
    print(f"Total Bill: ₹{total}")

elif choice == '4':
    full = int(input("Enter Full plates of Veg Biryani: "))
    half = int(input("Enter Half plates of Veg Biryani: "))
    total = (full * 180) + (half * 90)
    print(f"Total Bill: ₹{total}")

elif choice == '5':
    full = int(input("Enter Full plates of Rajma Chawal: "))
    half = int(input("Enter Half plates of Rajma Chawal: "))
    total = (full * 220) + (half * 110)
    print(f"Total Bill: ₹{total}")

else:
    print("⚠️ Invalid choice. Please run again.")
