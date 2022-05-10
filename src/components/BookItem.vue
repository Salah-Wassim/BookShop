<template>
	<li>
  	    {{ book.title }}
        <button @click="$emit('edit',book.id)">Edit</button>
        <button @click="$emit('delete')">Delete</button>
 	    <button @click="$emit('detail', book)">Detail</button>
    </li>
</template>

<script>
export default {
    props:['book'],
    emits: ['delete','edit','detail'],
    computed:{}
}
</script>
