
print("1. Burger - ₹120")
print("2. Pizza  - ₹250")
print("3. Coke   - ₹40")

# Initialize total
total = 0

while True:
    item = int(input("Enter item number (0 to stop): "))
    if item == 0:
        break

    qty = int(input("Enter quantity: "))

    if item == 1:
        total += 120 * qty
    elif item == 2:
        total += 250 * qty
    elif item == 3:
        total += 40 * qty
    else:
        print("Invalid item number")

# Final bill
print("Total Bill: ₹", total)
