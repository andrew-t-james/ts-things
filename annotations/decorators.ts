@classDecorator
class Boat {
  @testDecorator
  color: string = 'red'

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Some error here')
  pilot(@parameterDecorator speed: string): void {
    if(speed === 'fast') {
      console.log('splash')
    } else {
      console.log('nothing')
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(index)
}

function testDecorator(target: any, key: string) {
  console.log('Key: ', key)
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
      desc.value = function() {
        try {
          method()
        } catch (e) {
          console.log(errorMessage)
      }
    }
  }
}
