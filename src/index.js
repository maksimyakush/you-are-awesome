// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => this.prop = prop;
const createNotEnumerableProperty = (prop) => {
    Object.defineProperty( Object.prototype, prop, {
                value: 'value',
                enumerable: false,
            });
    return prop;
};
const createProtoMagicObject = () => {};



/// decorator for incrementor ///
const cache = (totalAmount = 0) => () =>  {
		totalAmount += 1;
		const plusOne = (b) => {
			totalAmount += 1;
			return plusOne;
		}
		plusOne.valueOf = () => totalAmount;
		return plusOne;
}
const incrementor = cache();

const asyncIncrementor = () => {
};
const createIncrementer = () => {

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (item) => new Promise(res => setTimeout(() => res(item), 1000));

const getDeepPropertiesCount = () => {};
const createSerializedObject = () => new String();
const toBuffer = () => {};
const sortByProto = (arr) =>  arr.sort((a, b) => a.__proto__ - b.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;