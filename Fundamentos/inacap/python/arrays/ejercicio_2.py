maxima = 0
minima = 0
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
        
    # tmpMinima= min(tmpMedidas)
    # tmpMaxima= max(tmpMedidas)
    #print(f"las temperaturas minimas son: {tmpMinima}")
    #print(f" las temperaturas maximas son: {tmpMaxima}")

print(f"\n\ntemperaturas tomadas en los ultimos {i} dias: {tmpMedidas}")
print(f"Día con más calor: {maxima}")
print(f"Día con menos calor: {minima}")
