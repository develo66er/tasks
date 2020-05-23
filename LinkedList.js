class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        // Создаём новый узел, который будет новым head,
        // при создании передаем второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        const newNode = new LinkedListNode(value, this.head);

        // Переназначаем head на новый узел
        this.head = newNode;

        // Если ещё нет tail, делаем новый узел tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        // Возвращаем весь список.
        return this;
    }

    append(value) {
        // Создаём новый узел.
        const newNode = new LinkedListNode(value);

        // Если нет head или tail, делаем новым узлом head и tail.
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Присоединяем новый узел к концу связного списка.
        // Берём последний узел и указываем, что его next будет новым узлом.
        this.tail.next = newNode;

        // Переназначаем tail на новый узел.
        this.tail = newNode;

        return this;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));

        return this;
    }

    // Создаём массив из всех узлов
    toArray() {
        const nodes = [];

        let currentNode = this.head;

        // Перебираем все узлы и добавляем в массив.
        while (currentNode.next) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        // Возвращаем массив из всех узлов.
        return nodes;
    }
    deleteTail() {
        // Если нет tail, значит список пуст.

        if (!this.tail) {
            return null;
        }

        // Сохраняем значение последнего узла.
        const deletedTail = this.tail;

        // Если head и tail равны, значит в списке только один узел.
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // Если в связном списке много узлов.
        // Перебираем все узлы и находим предпоследний узел,
        // убираем ссылку «next» на последний узел.
        let currentNode = this.head;
        while (currentNode.next) {
            // Если у следующего узла нет следующего узла,
            // значит текущий узел предпоследний.
            if (!currentNode.next.next) {
                // убираем ссылку «next» на последний узел.
                currentNode.next = null;
            } else {
                // Перематываем на один узел вперед.
                currentNode = currentNode.next;
            }
        }

        // В данном случае currentNode - это предпоследний узел или head,
        // который становится последним узлом.
        this.tail = currentNode;

        return deletedTail;
    }
    deleteHead() {
        // Если нет head значит список пуст.
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        // Если у head есть ссылка на следующий "next" узел
        // то делаем его новым head.
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            // Если у head нет ссылки на следующий "next" узел
            // то мы удаляем последний узел.
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }
}
module.exports = LinkedList;