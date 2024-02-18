class PriorityQueue {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator || ((a, b) => a - b);
    }

    size() {
        return this.heap.length;
    }

    offer(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    poll() {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleUp(pos) {
        while (pos > 0) {
            const parent = Math.floor((pos - 1) / 2);
            if (this.comparator(this.heap[pos], this.heap[parent]) < 0) {
                [this.heap[pos], this.heap[parent]] = [this.heap[parent], this.heap[pos]];
                pos = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown(pos) {
        const last = this.heap.length - 1;
        while (true) {
            let left = pos * 2 + 1;
            let right = pos * 2 + 2;
            let minIndex = pos;

            if (left <= last && this.comparator(this.heap[left], this.heap[minIndex]) < 0) {
                minIndex = left;
            }
            if (right <= last && this.comparator(this.heap[right], this.heap[minIndex]) < 0) {
                minIndex = right;
            }

            if (minIndex !== pos) {
                [this.heap[pos], this.heap[minIndex]] = [this.heap[minIndex], this.heap[pos]];
                pos = minIndex;
            } else {
                break;
            }
        }
    }
}

function totalCost(arr) {
    let totalCost = 0;

    // Create min heap and max heap
    const minHeap = new PriorityQueue();
    const maxHeap = new PriorityQueue((a, b) => b - a); // Max heap

    // Populate heaps
    for (const num of arr) {
        minHeap.offer(num);
        maxHeap.offer(num);
    }

    while (minHeap.size() > 1) {
        // Remove minimum and maximum elements
        const minVal = minHeap.poll();
        const maxVal = maxHeap.poll();

        // Compute cost
        const cost = Math.ceil((minVal + maxVal) / (maxVal - minVal + 1));
        totalCost += cost;

        // Add sum back to the array
        const sum = minVal + maxVal;
        minHeap.offer(sum);
        maxHeap.offer(sum);
    }

    return totalCost;
}

const arr = [2, 3, 4, 5, 7];
console.log(totalCost(arr)); // Output should be 8
