// 密码保护功能 - 已禁用

/**
 * 检查是否设置了密码保护
 * 通过读取页面上嵌入的环境变量来检查
 */
function isPasswordProtected() {
    // 密码功能已禁用，始终返回false
    return false;
}

/**
 * 检查是否强制要求设置密码
 * 如果没有设置有效的 PASSWORD，则认为需要强制设置密码
 * 为了安全考虑，所有部署都必须设置密码
 */
function isPasswordRequired() {
    // 密码功能已禁用，始终返回false
    return false;
}

/**
 * 强制密码保护检查 - 防止绕过
 * 在关键操作前都应该调用此函数
 */
function ensurePasswordProtection() {
    // 密码功能已禁用，直接返回true
    return true;
}

window.isPasswordProtected = isPasswordProtected;
window.isPasswordRequired = isPasswordRequired;

/**
 * 验证用户输入的密码是否正确（异步，使用SHA-256哈希）
 */
async function verifyPassword(password) {
    // 密码功能已禁用，始终返回true
    return true;
}

// 验证状态检查
function isPasswordVerified() {
    // 密码功能已禁用，始终返回true
    return true;
}

// 更新全局导出
window.isPasswordProtected = isPasswordProtected;
window.isPasswordRequired = isPasswordRequired;
window.isPasswordVerified = isPasswordVerified;
window.verifyPassword = verifyPassword;
window.ensurePasswordProtection = ensurePasswordProtection;

// SHA-256实现，可用Web Crypto API
async function sha256(message) {
    if (window.crypto && crypto.subtle && crypto.subtle.digest) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // HTTP 下调用原始 js‑sha256
    if (typeof window._jsSha256 === 'function') {
        return window._jsSha256(message);
    }
    throw new Error('No SHA-256 implementation available.');
}

/**
 * 显示密码验证弹窗
 */
function showPasswordModal() {
    // 密码功能已禁用，不显示弹窗
    return;
}

/**
 * 隐藏密码验证弹窗
 */
function hidePasswordModal() {
    // 密码功能已禁用，不执行任何操作
    return;
}

/**
 * 显示密码错误信息
 */
function showPasswordError() {
    // 密码功能已禁用，不执行任何操作
    return;
}

/**
 * 隐藏密码错误信息
 */
function hidePasswordError() {
    // 密码功能已禁用，不执行任何操作
    return;
}

/**
 * 处理密码提交事件（异步）
 */
async function handlePasswordSubmit() {
    // 密码功能已禁用，不执行任何操作
    return;
}

/**
 * 初始化密码验证系统
 */
function initPasswordProtection() {
    // 密码功能已禁用，不执行任何操作
    return;
}

// 在页面加载完成后初始化密码保护
document.addEventListener('DOMContentLoaded', function () {
    // 密码功能已禁用，不执行任何操作
});