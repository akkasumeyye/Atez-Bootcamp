/**
 * 
 * Generic ve Interface'lar genellikle CRUD ile kullanıldığından örneğimi CRUD ile vermek istedim.
 * 
 */

// ilk olarak generic interface tanımlayalım
interface Repository<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(data: T): Promise<T>;
    update(id: number, data: T): Promise<T | null>;
    delete(id: number): Promise<void>;
  }
  
  // Daha sonra implement edecek sınıfımızı oluşturalım
  class BaseRepository<T> implements Repository<T> {
    protected items: T[] = [];
  
    async findById(id: number): Promise<T | null> {
      const item = this.items.find((item: any) => item.id === id);
      return item ?? null;
    }
  
    async findAll(): Promise<T[]> {
      return this.items;
    }
  
    async create(data: T): Promise<T> {
      const item = { ...data, id: this.items.length + 1 };
      this.items.push(item);
      return item;
    }
  
    async update(id: number, data: T): Promise<T | null> {
      const index = this.items.findIndex((item: any) => item.id === id);
      if (index === -1) {
        return null;
      }
      const item = { ...data, id };
      this.items[index] = item;
      return item;
    }
  
    async delete(id: number): Promise<void> {
      const index = this.items.findIndex((item: any) => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
  // BaseReposity'ye extends olan bir class tanımlayacağız böylece BaseRespository özelliklerini devralacağız.

  /**
   * 
   * 
   * implements ve extends farkı , implement ile bir interface'i classa uygularsınız, bütün özelliklerini almak zorundadır. extends ile bir classın subclass'ını olusturuz
   * 
   */


  class UserRepository extends BaseRepository<User> {
    async findByEmail(email: string): Promise<User | null> {
      const user = this.items.find((item: any) => item.email === email);
      return user ?? null;
    }
  }
  
  // user interface tanımlayalım
  interface User {
    id?: number;
    name: string;
    email: string;
  }
  
  // CRUD işlemlerimizde UserRepository class kullanacağız
  const userRepository = new UserRepository();
  
  // Create a new user
  const newUser = { name: 'Sumeyye Akkas', email: 'sumeyyeakkas@example.com' };
  userRepository.create(newUser).then(user => {
    console.log('Created user:', user);
  });
  
  // Update an existing user
  userRepository.update(1, { name: 'Akkas Sumeyye', email: 'akkasumeyye@example.com' }).then(user => {
    console.log('Updated user:', user);
  });
  
  // Delete an existing user
  userRepository.delete(1).then(() => {
    console.log('Deleted user');
  });
  
  // Find all users
  userRepository.findAll().then(users => {
    console.log('All users:', users);
  });
  
  // Find a user by email
  userRepository.findByEmail('sumeyyeakkas@example.com').then(user => {
    console.log('Found user by email:', user);
  });
  
   
//    OUTPUT:
//    Created user: { name: 'Sumeyye Akkas', email: 'sumeyyeakkas@example.com', id: 1 }
//    Updated user: { name: 'Akkas Sumeyye', email: 'akkasumeyye@example.com', id: 1 }
//    Deleted user
//    All users: []
//    Found user by email: null