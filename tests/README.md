# Please do not change function names

function name တွေကို ပေးပြီးသားအတိုင်းပဲထားပါ။ မိမိဘာသာပြောင်းလိုက်ပါက module နဲ့ test file တွေထဲမှာပါ လိုက်ပြောင်းရပါမယ်။ function names တွေမတူရင် test run လို့မရပါ။

# First step

ဒီ file ကိုဖွင့်ထားတဲ့ folder (directory) မှာ terminal ကိုဖွင့်ပါ၊ ပြီးရင် အောက်က command ကိုရိုက် ထည့်ပါ

```bash
npm install
```

# Second step

ကိုယ်ရေးထားတဲ့ code တွေကို copy လာပြီး သက်ဆိုင်ရာ function (သူ့ name နဲ့ကိုက်တဲ့ function) တွေမှာ လာ Paste ချပါ

# Third step

test run ဖို့အတွက်

-  function တစ်စီကို လိုက် run ကြည့်တာရယ်,
-  နောက်ဆုံးမှာအပြီးမှာ test အားလုံးကို run တာရယ်

ဆိုပြီး ၂ မျိုး run နိုင်ပါတယ်။

1. တစ်မျိုးစီ ဖို့အတွက်ဆိုရင် terminal ထဲမှာ ကိုယ့် run မယ့် function ရဲ့ name ကို စာလုံးပေါင်း မှန်စွာရိုက်ထည့်ပြီး run ပါ

```bash
npm run test:only typeYourFunctionNameHere
```

2. အားလုံး run ဖို့အတွက် ဆိုရင် terminal ထဲမှာ

```bash
npm run test
```

လို့ရိုက်ထည့်ပြီး enter ခေါက်ပြီး run ပါ။ ရှိ သမျှ တွေအားလုံးကို ပေးပါလိမ့်မယ်။

Optionally အနေနဲ့ ကိုယ်ရေးထားတဲ့ code တွေရဲ့ output console ကို terminal မှာ ကြည့်ချင်ရင်

```bash
npm run js
```

လို့ရိုက်ထည့်ပါ

# Fourth step

Pass ဖြစ်တဲ့ functions တွေကိုပြပါလိမ့်မယ်, Pass မဖြစ်ရင်လဲ မဖြစ်တဲ့ function နာမည်ကိုပြပါလိမ့်မယ်၊ ပြင်ဆင်ဖို့ လိုတာတွေကို ပြင်ဆင်ပြီး Pass ဖြစ်လား ထပ် try ကြည့်ပါ။
