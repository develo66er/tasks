const Linkedlist = require('./LinkedList');



let rnd1 = () => Math.floor(Math.random() * 10);
//let arr = [1, 2, 2, 2, 4, 8, 2, 4, 4, 16];

//let arr = [1,4, 2, 2, 2, 4, 8, 2, 4, 4, 16];

//let arr = [1, 4, 2, 2, 2, 4, 8, 2, 4, 4, 8, 8, 8, 16, 8];
//let arr = [1, 4, 2, 2, 4, 8, 2, 4, 4, 8, 8, 16, 8, 1, 1];

/*for(let i = 0;i < N;i++){
    arr.push(Math.pow(2,rnd1()));
}*/




const shift_left = (a) => {
    const list = new Linkedlist();
    const n = a.length;
    let i;
    for (i = n; i >= 0;) {


        if (i == 0 || ((i != 0 && a[i] != a[i - 1]) || a[i] * 2 != a[i + 1])) {
            list.prepend(a[i]);
            i--;
        }
        else {
            list.deleteHead();
            list.prepend(a[i] * 4);

            i -= 2;
        }

    }

    return list.toArray();
}
const shift_right = (a) => {
    const list = new Linkedlist();
    const n = a.length;
    let i;
    for (i = 0; i <= n;) {

        if (i == n - 1 || ((i < n && a[i] != a[i + 1]) || (a[i - 1] != a[i] * 2))) {
            list.append(a[i]);

            i++;
        }
        else {
            list.deleteTail();
            list.append(a[i] * 4);

            i += 2;
        }

    }

    return list.toArray();
}
const shift_right_dup = (a) => {
    const list = new Linkedlist();
    const n = a.length;
    let i;
    for (i = 0; i <= n;) {

        if (a[i] == a[i + 1]) {


            list.append(a[i] * 2);

            i += 2;
        }
        else {
            list.append(a[i]);
            i++;
        }

    }

    return list.toArray();
}
const findTriplets = (start, a) => {

    let i, j, prev;
    const n = a.length;
    for (i = start; i < n; i++) {

        for (j = i + 2, prev = i; j < n; j += 2) {
            //console.log(a[prev] + ' ' + a[j]) + '\n';

            if (a[prev] !== a[j]) {
                //j+=2;
                prev = j;

                continue;
            }
            // если они равны но это не триплет [202]
            if (a[prev + 1] != a[prev]) {
                //j+=2;
                prev = j;

                continue;
            }
            const mult = a[prev] * 2;
            // непример: 4222->shift_right->442
            if (prev != 0 && a[prev - 1] == mult) {
                //shift_right();
                //console.log('shift right > ' + a)
                return [prev, 0];//shift right возвращаем позицию
                //например: 12224
            } else if (j < n - 1 && a[j + 1] == mult) {
                //shift_left();
                //console.log('shift left > ' + a);
                return [j, 1];// shift left
            }


        }
    }

    return [-1, -1];//
}
const findDup = (start, a) => {

    let i, prev;
    const n = a.length;
    for (i = start + 1, prev = start; i < n; i++) {


        if (a[prev] != a[i]) {
            //j+=2;
            prev = i;

            continue;
        } else {
            return i;
        }


    }

    return -1;
}
const processTriplets = (a) => {
    const n = a.length;
    let counter = 0;
    while (counter < n - 2 && counter >= 0) {
        const t = findTriplets(counter, a);
        counter = t[0];
        if (t[1] == 0) {
            console.log(a)
            a = shift_right(a);
            console.log('shift right > ' + a)
        }
        else if (t[1] == 1) {
            console.log(a)
            a = shift_left(a);
            console.log('shift left > ' + a)
        }
    }
    return a;
}
const processDups = (a) => {
    let t = 0;
    do {
        t = findDup(t, a);

        if (t > 0) {
            console.log(a)
            a = shift_right_dup(a);
            console.log('shift right dup > ' + a)
        }
        a = processTriplets(a);

    } while (t >= 0);
    return a;
}
function main(a){
    const n = a.length;

    let prevlen, len;
    do {
        prevlen = a.length;

        a = processTriplets(a);

        a = processDups(a);

        len = a.length;
    } while (prevlen != len);

    return a;

}
//main(arr);
module.exports=main;