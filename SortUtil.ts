import { ISortable } from "./ISortable";
import { LinkedListGroup } from "./linkedList";
import { CharacterGroup } from "./CharacterGroup";
import { NumberGroup } from "./NumberGroup";
export class SortUtil  {
    collection: ISortable;
   
    constructor(collection: ISortable) {
      this.collection = collection;
    }

    sort(): void {
      let isSorted = false;
      let lastUnsorted = this.collection.length - 1;
  
      while (!isSorted) {
        isSorted = true;
        
        for (let i = 0; i < lastUnsorted; i++) {
          if (this.collection.compare(i, i + 1)) {
            this.collection.swap(i, i + 1);
            isSorted = false;
          }
        }
  
        lastUnsorted--;
      }
    }
  }

