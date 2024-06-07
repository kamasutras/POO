print('-' * 40)
print("Detectar temperatura mínima y máxima :D")
print('-' * 40)

muchaCalor = 0
menosCalor = 100

dias = int(input("Cantidad de días para medir la temperatura -> "))

for i in range(1, dias + 1):
    temperatura = int(input(f"Temperatura del día {i} -> "))
    
    if temperatura > muchaCalor:
        muchaCalor = temperatura
    if temperatura < menosCalor:
        menosCalor = temperatura

print(f"Día con más calor: {muchaCalor}")
print(f"Día con menos calor: {menosCalor}")
