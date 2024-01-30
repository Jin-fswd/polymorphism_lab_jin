import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable{
    data: string;

    constructor(data: string) {
        this.data = data;
    }

    get length(): number {
        return (this.data).length;
    }

    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right];
    }

    swap(left: number, right: number): void {
        const dataArr = this.data.split('');
        [dataArr[left], dataArr[right]] = [dataArr[right], dataArr[left]];
        this.data = dataArr.join('');
    }
}