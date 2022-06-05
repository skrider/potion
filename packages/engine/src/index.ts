import {AppNode, Serializable} from "types"

class Engine {
  dir: string
  
  constructor(dir: string) {
    this.dir = dir
  }

  read(name: string): AppNode {
    return {
      _name: "/"
    }
  }

  update(update: AppNode) {

  }

  create(name: string) {
    
  }

  delete(name: string): AppNode {
    return {
      _name: ""
    }
  }
}

export default Engine
