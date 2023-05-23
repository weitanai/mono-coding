export default function CleanCode() {
    return (
        <div className="clean-code-box">
            <h1>Clean Code</h1>

        </div>
    )
}

const Rectangle = {
    resizeTopLeft(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeTopRight(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeBottomLeft(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeBottomRight(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
};

const Oval = {
    resizeLeft(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeRight(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeTop(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeBottom(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
};

const Header = {
    resizeLeft(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeRight(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
}

const TextBlock = {
    resizeTopLeft(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeTopRight(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeBottomLeft(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
    resizeBottomRight(position, size, preserveAspect, dx, dy) {
        // 10 repetitive lines of math
    },
};
let Directions = {
    top() {
      // 5 unique lines of math
    },
    left() {
      // 5 unique lines of math
    },
    bottom() {
      // 5 unique lines of math
    },
    right() {
      // 5 unique lines of math
    },
  };
  
  let Shapes = {
    Oval() {
      // 5 unique lines of math
    },
    Rectangle() {
      // 5 unique lines of math
    },
  }
  

const {top, bottom, left, right} = Directions;

function createHandle(directions) {
  // 20 lines of code
}

const fourCorners = [
  createHandle([top, left]),
  createHandle([top, right]),
  createHandle([bottom, left]),
  createHandle([bottom, right]),
];
const fourSides = [
  createHandle([top]),
  createHandle([left]),
  createHandle([right]),
  createHandle([bottom]),
];
const twoSides = [
  createHandle([left]),
  createHandle([right]),
];

function createBox(shape: any, handles: any) {
  // 20 lines of code
}


const cusRectangle = createBox(Shapes.Rectangle, fourCorners);
const cusOval = createBox(Shapes.Oval, fourSides);
const cusHeader = createBox(Shapes.Rectangle, twoSides);
const cusTextBox = createBox(Shapes.Rectangle, fourCorners);
