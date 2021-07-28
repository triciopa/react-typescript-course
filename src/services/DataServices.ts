import { Space } from "../model/Model";



export class DataService {
  
  public async getSpaces(): Promise<Space[]>{
    const result : Space[] = []
    result.push({
      location: 'Paris',
      name: 'Best location',
      spaceId: '123'
    })
    result.push({
      location: 'London',
      name: 'Regular location',
      spaceId: '456'
    })
    result.push({
      location: 'New York',
      name: 'Bad location',
      spaceId: '679'
    })
    return result;
  }
}