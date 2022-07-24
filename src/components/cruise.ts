export const echoLength = <T extends { length: number }>(value: T): number => {

  console.log(value.length);
  return value.length;
}

echoLength("Hello");


type Vowels = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u'
}

type VowelsInAdetayoObject = Pick<Vowels, 'a' | 'e' | 'o'>
type VowelsNotInAdetayoObject = Omit<Vowels, 'a' | 'e' | 'o'>
type VowelsInAdetayo = keyof VowelsInAdetayoObject;


const favVowels: VowelsInAdetayo = 'a'

console.log(favVowels)