const nums = [80, 77, 88, 95, 68];

function getAvg(nums) {
  const total = nums.reduce((acc, c) => acc + c, 0);
  return total / nums.length;
}

const average = getAvg(nums);
console.log("The average of the number is :"+""+average)


// echo "# Functions-Practice" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M product
// git remote add origin git@github.com:Kerama-Ronald/Functions-Practice.git
// git push -u origin main