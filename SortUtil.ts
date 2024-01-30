import { ISortable } from "./ISortable";
import { LinkedListGroup } from "./linkedList";
import { CharacterGroup } from "./CharacterGroup";
import { NumberGroup } from "./NumberGroup";
class SortUtil  {
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

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(3);
linkedListGroup.add(1);
linkedListGroup.add(2);
const linkedListSorter = new SortUtil(linkedListGroup);
linkedListSorter.sort();
linkedListGroup.print(); 

const numberGroup = new NumberGroup([3, 1, 2]);
const numberGroupSorter = new SortUtil(numberGroup);
numberGroupSorter.sort();
numberGroup.print();

const characterGroup = new CharacterGroup("cba");
const characterGroupSorter = new SortUtil(characterGroup);
characterGroupSorter.sort();
characterGroup.print();