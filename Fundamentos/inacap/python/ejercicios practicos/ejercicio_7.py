maxima = 0
minima = 100
tmpMedidas = []
print('-' * 40)
print("Detectar temperatura mínima y máxima :D")
print('-' * 40)
dias = int(input("Cantidad de días para medir la temperatura -> "))
for i in range(1, dias + 1):
    temperatura = int(input(f"Temperatura del día {i} -> "))
    tmpMedidas.append(temperatura)
    if temperatura > maxima:
        maxima = temperatura
    if temperatura < minima:
        minima = temperatura
        
print(f"temperaturas tomadas en los ultimos {i} dias: {tmpMedidas}")
print(f"Día con más calor: {maxima}")
print(f"Día con menos calor: {minima}")
