<template>
<div>
   <header>
    <slot name="header"></slot>
  </header>
  <h2>I'm the child title</h2>
  <slot>
    如果没有分发内容则显示我。
  </slot><br/>
  ---------------------------------------------------------------------------------------
  
</div>
</template>

<script>

