(()=>{
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress?(id: string): string;
  }
  interface Address {
    _id: number;
    zip: string;
    city: string;
  }
  const client: Client = {
    name: 'Juan',
    age: 25,
    address: {
      _id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    },
    // getFullAddress(id: string) {
    //   return this.address?.city
    // }
  }

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    // getFullAddress(id: string) {
    //   return this.address?.city
    // }
  }
  

})()