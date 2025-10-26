#!/bin/sh

# Espera 5 segundos. Esto da tiempo al DNS interno de Docker para estabilizarse.
echo "Esperando 5 segundos para que la resolución de DNS se estabilice..."
sleep 5

# Ejecuta el entrypoint original de Nginx
exec /docker-entrypoint.sh "$@"