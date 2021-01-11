# Zodiac Controllers

![image showing signs' traits and categories](./zodiac.jpeg)

## Part 1: EJS & EJS Layouts

* fork & clone this repo
* make this repo a node project by running `npm init -y`
* create your entry point file
* install express and set it up in your `index.js`
* Install and configure `ejs`
* Install and configure `express-ejs-layouts`
* Stub out the 4 routes below using `res.send()`, just to make sure they're working
* Create a `views` folder with a `layout.ejs` that contains the boilerplate and a header that says **Zodiac Controller**
* Create a view for your home route (`index.ejs`) that says "Let's learn about the signs!" and includes links to the other four routes. Make your home route `res.render` this view.
* Create a view for each of the four categories of signs. Each view should recieve an array of traits that it displays to the page using a `forEach` loop.


| URL Pattern  | Content |
| ------------- | ------------- |
| /  | 3 navigation links (/water, /air, /fire) |
| /water | list of water signs and relevant traits from the graphic above  |
| /air | list of air signs and relevant traits from the graphic above  |
| /fire | list of fire signs and relevant traits from the graphic above  |
| /earth | list of earth sign and relevant traits from the graphic above  |

---

## Part 2: Controllers

| URL Pattern  | Content |
| ------------- | ------------- |
| /water/cancer | image of cancer symbol  |
| /water/scorpio | image of scorpio symbol  |
| /water/pisces | image of pisces symbol  |
| /air/gemini | image of gemini symbol  |
| /air/libra | image of libra symbol  |
| /air/aquarius | image of aquarius symbol |
| /fire/leo | image of leo symbol  |
| /fire/aries | image of aries symbol  |
| /fire/sagittarius | image of sagittarius symbol |
| /earth/taurus | image of taurus symbol  |
| /earth/virgo | image of virgo symbol  |
| /earth/capricorn | image of capricorn symbol |