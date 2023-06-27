![Photo](./assets/img/photo.jpg)<br>
# Andrey Boyarsky

### Contact Information:
![Telegram](./assets/img/tg.png) **Telegram:** [@Dektarion](https://t.me/Dektarion)<br>
![Discord](./assets/img/dis.png) **Discord:** [Dektarion](https://discordapp.com/users/377117456017391619/)<br>
![Phone](./assets/img/phone.png) **Phone:** +7-993-359-84-76

---

### About me:
I'm 29 and I've already managed to successfully completed several big scales projects within my current occupation as SeniorMarketing Researcher.<br>
Besides current business going smooth I always wanted  to enrich myself with the education of IT front-end developer and face the new challenges in my career on this field.<br>
While my great achievements in IT developing are yet to come, I'm happy to share my some starting projects that evolved as the result of my edcuation.<br>
I'm just on the beginning of this trail but completely sure I will succeed!

**Strengths:**
- Easily master new software to perform business tasks.
- Have a systematic mindset.
- Responsible, hardworking, attentive to details.

---

### Skills:
- HTML5;
- CSS (medium);
- SASS/SCSS (basics)
- JS (intermediate);
- GitHub;
- Git (intermediate);
- VS Code;
- SPSS (syntax).

---

### Code example:
Recursion arrow function for creating array with random non repeating objects.
```javascript
const getCardsArr = (counter) => {
  let check = [];
  let obj = [];

  if (counter === 0) {
    obj = greenCardsData;
  } else if (counter === 1) {
    obj = brownCardsData;
  } else if (counter === 2) {
    obj = blueCardsData;
  } else {
    return randomCardsArr;
  }
  max = Object.keys(obj).length - 1;

  for (let i = 0; i < ancientsData[gameInformation.numGodInArr].cardsCount[counter]; i++) {
    do {
      let num =  Math.floor(Math.random() * (max - min + 1)) + min;
      check = randomCardsArr.includes(obj[num]);
      if(!check){
        randomCardsArr.push(obj[num]);
      }
    }
    while(check);
  }
  counter++;
  getCardsArr(counter);
};
```

### Work experience:
- Study project #1: [Stepik-hw2-HTML-CSS-landing](https://github.com/Dektarion/Stepik-hw2-HTML-CSS-landing);
- Study project #2: [Stepik-hw3-UberEats](https://github.com/Dektarion/Stepik-hw3-UberEats);
- RSSchool Stage#0 Landing: [Travel](https://dektarion.github.io/Travel/);
- RSSchool Stage#0 JS Task: [Momentum](https://dektarion-momentum.netlify.app/);
- RSSchool Stage#0 Codejam JS Task: [Eldritch](https://dektarion.github.io/codejam-eldritch/).

### Education:
- Mendeleev University of Chemical Technology, sociologist;
- [Stepik course of HTML & CSS](https://stepik.org/course/38218);
- [RSSchool Stage#0](https://github.com/rolling-scopes-school/tasks/tree/master/stage0).

### Language:
- Russian (Native);
- English (Intermediate).