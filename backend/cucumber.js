module.exports = {
   // Ubicaciones de los archivos de características y definiciones de pasos
   require: [
     './tests/features/*.feature',
     './tests/step-definitions/*.js',
   ],
   // Opciones adicionales de configuración
   cucumberOpts: {
     // Formato de salida de los resultados de las pruebas
     format: 'json:./tests/results.json',
   },
   default: '--publish-quiet'
 };
 