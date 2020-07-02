'use strict';

/* 1е практическое задание */

// /* №1 */
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

// /* №2 */
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [], 
//     privat: false
// };

// /* №3 */
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


/* 2е практическое задание */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personalMovieDB = {
         count: numberOfFilms,
         movies: {},
         actors: {},
         genres: [], 
         privat: false
};

/* for() */

for(let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != '' && a != null && a.length <= 50 && b != '' && b != null && b.length <= 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
      }else{
          console.log('error');
          i--;
      }
} 
console.log(personalMovieDB); 

let checkFilm;

checkFilm = (personalMovieDB.count<10) ? 'Просмотрено мало фильмов':
            (personalMovieDB.count<30) ? 'Классический зритель':
            (personalMovieDB.count>30) ? 'Киноман':
            ('Error');

console.log(checkFilm);

/* while() */

// let i = 0;

// while(i < 2){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
        
//       if (a != '' && a != null && a.length <= 50 && b != '' && b != null && b.length <= 50){
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('done');

//       }else{
//         console.log('error');
//       }           
// }

/* do {} while() */

// let i = 0;
//   do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//       if (a != '' && a != null && a.length <= 50 && b != '' && b != null && b.length <= 50){
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('done');

//       }else{
//         console.log('error');
//       }
// }
// while(i < 2); 

// if(personalMovieDB.count<10) {
//     console.log('Просмотрено мало фильмов');
// }
// if(personalMovieDB.count<30) {
//     console.log('Классический зритель');
// }
// if(personalMovieDB.count>30) {
//     console.log('Киноман');
// }else {
//     console.log('Error');
// }

