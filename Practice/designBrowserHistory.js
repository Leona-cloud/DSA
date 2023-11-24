/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.browser = [homepage];
  this.ptr = 0; //tracks the current page in the browser
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  while (this.ptr < this.browser.length - 1) {
    // ensures ptr is within the bounds of the array
    this.browser.pop();
  }

  this.browser.push(url);
  this.ptr += 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps > 0 && this.ptr > 0) {
    steps -= 1;
    this.ptr -= 1;
  }

  return this.browser[this.ptr];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps > 0 && this.ptr < this.browser.length - 1) {
    steps -= 1; // This decreases the count of remaining steps to move forward
    this.ptr += 1;
  }

  return this.browser[this.ptr];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// Time Complexity:
// Visit Method (visit):

// The while loop in the visit method iterates until the pointer (ptr) reaches the end of the history array. In the worst case, it's O(n), where n is the length of the history.
// Appending to the array (this.browser.push(url)) is typically O(1) but might be O(n) in certain scenarios where the array needs to resize.
// Overall, the time complexity of visit is primarily dominated by the while loop, making it O(n).
// Back Method (back):

// The while loop in the back method iterates until the specified number of steps (steps) or until reaching the start of the history array (this.ptr > 0). In the worst case, it's O(steps), which could be less than or equal to the length of the history.
// Accessing the element in the history array by index (this.browser[this.ptr]) is O(1).
// Therefore, the time complexity of back is O(steps) where steps is the number of steps taken.
// Forward Method (forward):

// Similar to the back method, the time complexity of forward is O(steps), where steps is the specified number of steps to move forward or until reaching the end of the history array.
// Space Complexity:
// The space complexity is primarily determined by the space used to store the browsing history (this.browser).
// The space complexity of storing URLs in the browser array is O(n), where n is the number of URLs stored in the history.
// In summary:

// Visit: Time Complexity - O(n), Space Complexity - O(n)
// Back: Time Complexity - O(steps), Space Complexity - O(1)
// Forward: Time Complexity - O(steps), Space Complexity - O(1)
// The space complexity of the methods remains relatively constant because they primarily manipulate and traverse the existing history array without using additional space proportional to the input.
