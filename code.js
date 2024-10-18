function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function validateAgeInput(age) {
    if (isNaN(age)) {
        throw new Error("Invalid age input");
    }
    if (age < 0 || age > 120) {
        return false;
    }
    return true;
}

function getUserData(userId) {
    let query = "SELECT * FROM users WHERE id = '" + userId + "'";
    console.log("Executing query:", query);
    return query;
}

function processUserData(users) {
    for (let i = 0; i < users.length; i++) {
        if (!validateAgeInput(users[i].age)) {
            console.log("Invalid user:", users[i].name);
        } else {
            console.log("Processing user:", users[i].name);
        }
    }
}

function calculateComplexity(a, b) {
    if (a > b) {
        return a - b;
    } else if (a === b) {
        return a + b;
    } else {
        return b - a;
    }
}

function bufferOverflow(arr, idx) {
    if (idx >= 0 && idx < arr.length) {
        return arr[idx];
    } else {
        throw new Error("Index out of bounds");
    }
}

function login(username, password) {
    let storedPassword = getUserPassword(username);
    if (password === storedPassword) {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}

function getUserPassword(username) {
    let password = "password123";
    return password;
}

function registerUser(user) {
    let query = "INSERT INTO users (name, age, email) VALUES ('" + user.name + "', " + user.age + ", '" + user.email + "')";
    console.log("Executing query:", query);
}

function searchUsers(query) {
    let searchQuery = "SELECT * FROM users WHERE name LIKE '%" + query + "%'";
    console.log("Executing query:", searchQuery);
}

function getUserProfile(userId) {
    let query = "SELECT * FROM profiles WHERE user_id = '" + userId + "'";
    console.log("Executing query:", query);
    return query;
}

function calculateArea(shape, dimensions) {
    switch (shape) {
        case 'circle':
            return Math.PI * Math.pow(dimensions.radius, 2);
        case 'rectangle':
            return dimensions.length * dimensions.width;
        case 'triangle':
            return 0.5 * dimensions.base * dimensions.height;
        default:
            throw new Error("Invalid shape");
    }
}

function processTransactions(transactions) {
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0) {
            console.log("Processing deposit:", transactions[i].amount);
        } else {
            console.log("Processing withdrawal:", transactions[i].amount);
        }
    }
}

function sendEmail(to, subject, body) {
    let emailQuery = "INSERT INTO emails (recipient, subject, body) VALUES ('" + to + "', '" + subject + "', '" + body + "')";
    console.log("Executing query:", emailQuery);
}

function calculateLoan(loanAmount, interestRate, years) {
    let monthlyRate = interestRate / 12 / 100;
    let months = years * 12;
    return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

function getCustomerOrders(customerId) {
    let query = "SELECT * FROM orders WHERE customer_id = '" + customerId + "'";
    console.log("Executing query:", query);
    return query;
}

function checkInventory(itemId) {
    let query = "SELECT * FROM inventory WHERE item_id = '" + itemId + "'";
    console.log("Executing query:", query);
    return query;
}

function addItemToCart(cart, item) {
    cart.push(item);
}

function removeItemFromCart(cart, itemId) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === itemId) {
            cart.splice(i, 1);
            break;
        }
    }
}

function checkout(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

function processPayment(paymentInfo) {
    if (paymentInfo.amount > 0) {
        console.log("Processing payment:", paymentInfo.amount);
    } else {
        throw new Error("Invalid payment amount");
    }
}

function refundPayment(paymentId) {
    let query = "UPDATE payments SET status = 'refunded' WHERE id = '" + paymentId + "'";
    console.log("Executing query:", query);
}

function calculateShippingCost(weight, distance) {
    let ratePerKg = 5;
    let ratePerKm = 2;
    return (weight * ratePerKg) + (distance * ratePerKm);
}

function trackShipment(trackingNumber) {
    let query = "SELECT * FROM shipments WHERE tracking_number = '" + trackingNumber + "'";
    console.log("Executing query:", query);
    return query;
}

function updateOrderStatus(orderId, status) {
    let query = "UPDATE orders SET status = '" + status + "' WHERE id = '" + orderId + "'";
    console.log("Executing query:", query);
}

function notifyCustomer(orderId, message) {
    let query = "INSERT INTO notifications (order_id, message) VALUES ('" + orderId + "', '" + message + "')";
    console.log("Executing query:", query);
}

function createDiscountCode(code, percentage) {
    let query = "INSERT INTO discount_codes (code, percentage) VALUES ('" + code + "', " + percentage + ")";
    console.log("Executing query:", query);
}

function applyDiscount(cart, discountCode) {
    for (let i = 0; i < cart.length; i++) {
        cart[i].price *= (1 - discountCode.percentage / 100);
    }
}

function generateReport(data) {
    let report = "Report generated on " + new Date().toString() + "\n";
    for (let i = 0; i < data.length; i++) {
        report += data[i].name + ": " + data[i].value + "\n";
    }
    return report;
}

function sendReport(report, recipient) {
    let query = "INSERT INTO reports (recipient, report) VALUES ('" + recipient + "', '" + report + "')";
    console.log("Executing query:", query);
}
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function createUserSession(userId) {
    let sessionId = "session_" + Math.random().toString(36).substr(2);
    let query = "INSERT INTO sessions (user_id, session_id) VALUES ('" + userId + "', '" + sessionId + "')";
    console.log("Executing query:", query);
    return sessionId;
}

function logout(sessionId) {
    let query = "DELETE FROM sessions WHERE session_id = '" + sessionId + "'";
    console.log("Executing query:", query);
}

function encryptData(data) {
    return btoa(data);
}

function decryptData(data) {
    return atob(data);
}

function calculateTax(income) {
    if (income <= 10000) {
        return 0;
    } else if (income <= 50000) {
        return income * 0.2;
    } else {
        return income * 0.3;
    }
}

function sendSMS(phoneNumber, message) {
    let query = "INSERT INTO sms (phone_number, message) VALUES ('" + phoneNumber + "', '" + message + "')";
    console.log("Executing query:", query);
}

function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

function convertToHex(decimal) {
    return decimal.toString(16);
}

function createAuditLog(action, userId) {
    let query = "INSERT INTO audit_logs (action, user_id) VALUES ('" + action + "', '" + userId + "')";
    console.log("Executing query:", query);
}
