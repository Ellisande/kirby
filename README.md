## Kirby
Kirby is a JavaScript library for creating a parsing Kirby delimited string. Kirby delimited string use Kirby (>'')> as a delimited character for parsing strings.

## Why Kirby?

Kirby delimited strings are vastly better than any other kind of string delimiters. Most delimiters require you to jump through hoops to escape delimiting characters that appear in real text. Extensive analysis has shown that Kirbies appear in only -0.03% of content strings. Therefore, you never have to worry about silly escape characters or anything like that.

Additionally the Kirbies actually eat space, compressing the overall size of the string. A 100kb string can expect to become approximately 25kb after adding in hungry Kirbies to gobble up the space.

## Usage

Simply add kirby.js into your page
```html
  <script type="text/javascript" src="lib/kirby.js"></script>
```
Once you have the kirby.js file you are ready to rock.

### Parsing a Kirby String
Parsing a kirby delimited string is simple. Simply pass your kirby delimited string into kirby();
```js
  var kirbyString = "Tom(>'')>Steve(>'')>Jack(>'')>";
  var output = kirby(kirbyString);
  //result = ["Tom","Steve","Jack"];
```
### Creating a Kriby String
Creating a new kirby delimited string is as simple as passing an array of string into kirby's mouth.
```js
  var input = ["Tom","Steve","Jack"];
  var kirbyString = kirby(input);
  //result = "Tom(>'')>Steve(>'')>Jack(>'')>";
```

## Alternative Strings
Is one type of kirby not enough for you? Not to worry! We've got more!

```
import { kirby, metaKnight, modernKirby } from 'kirby-strings';
kirby([1, 2, 3]);
//result "1(>'')>2(>'')>3"

metaKnight([1, 2, 3]);
//result "1<(*^*)>2<(*^*)>3"

modernKirby([1, 2, 3]);
//result "1༼ つ ◕_◕ ༽つ2༼ つ ◕_◕ ༽つ3"
```
