maxima = 0
minima = 5
tmpminima= []
tmpmaxima= []
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
        
        
    tmpmaxima.append(maxima)
    tmpminima.append(minima)



print(f"las temperaturas minimas son: {tmpminima}")
print(f" las temperaturas maximas son: {tmpmaxima}")

print(f"\n\ntemperaturas tomadas en los ultimos {i} dias: {tmpMedidas}")
print(f"Día con más calor: {maxima}")
print(f"Día con menos calor: {minima}")
