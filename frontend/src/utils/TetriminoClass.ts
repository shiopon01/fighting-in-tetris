class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
  list(): T[] {
    return this.data;
  }
}

class TetriminoClass {
  private queue = new Queue<number>(); // next tetriminos

  constructor() {
    // queueに14個準備
    this.pushIndexes();
    this.pushIndexes();
  }

  // ネクストを生成（1回7push）
  pushIndexes() {
    const indexes = [1, 2, 3, 4, 5, 6, 7];
    for (let i = indexes.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = indexes[i];
      indexes[i] = indexes[r];
      indexes[r] = tmp;
    }
    for (let i = 0; i < indexes.length; i++) {
      this.queue.push(indexes[i]);
    }
  }

  popIndex(): number | undefined {
    if (this.queue.list().length < 7) {
      this.pushIndexes();
    }
    const index = this.queue.pop();
    return index;
  }

  getList(): number[] {
    return this.queue.list();
  }
}

export default TetriminoClass;
