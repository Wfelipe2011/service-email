import { LoggerPino as Logger } from '../logger';

export function LoggerService(params?: { isObject: boolean }) {
  const state = {
    propertyKey: null,
    args: null,
    methodOriginal: null,
    context: null,
  };

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const methodOriginal = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      state.propertyKey = propertyKey;
      state.args = args;
      state.methodOriginal = methodOriginal;
      state.context = this;
      return await coreDecorator();
    };
  };

  async function coreDecorator() {
    const { args, methodOriginal, propertyKey, context } = state;
    logger(`Method => ${propertyKey}`);
    checkLoggerObject();
    const result = await methodOriginal.apply(context, args);
    logger(`${propertyKey} return => ${result}`);
    return result;
  }

  function checkLoggerObject() {
    if (!params?.isObject) return logger(`Params => ${state.args}`);
    logger(` --- Object ---`);
    logger(state.args);
  }

  function logger(message: any | any[]) {
    Logger.info(message);
  }
}
