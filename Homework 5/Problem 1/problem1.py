import math

a = (25, 25, 25)
b = (9, 9, 9)
distance = math.sqrt(sum([(a - b) ** 2 for a, b in zip(a, b)]))
print("distance: ",distance)
