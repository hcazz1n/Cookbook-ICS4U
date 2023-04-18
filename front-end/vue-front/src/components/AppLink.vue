<template></template>

<script setup>
    import {computed} from 'vue'
    import {RouterLink} from 'vue-router'
    
    const props = defineProps({
        ...RouterLink.props
    })
    
    const isExternal = computed(() => {
        return typeof props.to === 'string' && props.to.startsWith('http')
    })
</script>