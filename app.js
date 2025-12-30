// タブ切り替え
function showApp(appId, event) {
    // コンテンツの切り替え
    document.querySelectorAll('.app-container').forEach(el => el.classList.remove('active'));
    document.getElementById(appId).classList.add('active');
    
    // タイトルの更新
    document.getElementById('app-title').innerText = appId.toUpperCase();
    
    // ナビのactive切り替え
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// To-Do機能
document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    if (input.value.trim() === '') return;
    
    const li = document.createElement('li');
    li.style.background = "#222";
    li.style.margin = "5px 0";
    li.style.padding = "10px";
    li.style.borderRadius = "5px";
    li.innerText = input.value;
    
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
});
