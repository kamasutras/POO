maxima = float('-inf')  # Inicializa a un valor muy bajo
minima = float('inf')
tmpMedidas = []

print('-' * 40)
print("Detectar temperatura mínima y máxima :D")
print('-' * 40)


dias = int(input("Cantidad de días para medir la temperatura -> "))


for i in range(dias ):
    temperatura = int(input(f"Temperatura del día {i + 1} -> "))
    tmpMedidas.append(temperatura)
    
    
    if temperatura > maxima:
        maxima = temperatura
    if temperatura < minima:
        minima = temperatura
        
print(f"\n\ntemperaturas tomadas en los ultimos {i} dias: {tmpMedidas}")
print(f"Día con más calor: {maxima}")
print(f"Día con menos calor: {minima}")

