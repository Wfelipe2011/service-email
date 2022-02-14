export function inspect() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const methodOriginal = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      console.time(`${propertyKey}`);
      console.log(`--- Método ${propertyKey}`);
      console.log(`-------- Parâmetros ----------- `);
      console.log(args);
      const result = await methodOriginal.apply(this, args);
      console.log(`---------- Retorno ---------- `);
      console.log(result);
      console.log('--------- Tempo de execução ----------');
      console.timeEnd(`${propertyKey}`)
      return result
    };
  };
}

