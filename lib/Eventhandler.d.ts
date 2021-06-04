import { EventEmitter } from 'events';

export default class Eventhandler extends EventEmitter {
    static counter: number;
	static bindings: Map<string, (...args:any[])=>any>;
	static emitter:EventEmitter;

	static request<T>(eventName: string, ...args: any[]): Promise<T>

	static bind(eventName:string, func: (...args: any[]) => any):void

	static unbind(eventName: string, method: (...args: any[]) => any):void

	static emit(eventName:string, ...data:any[]):void
}