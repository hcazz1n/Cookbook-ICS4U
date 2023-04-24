<!--Allows linking to both internal and external links with the use of only one component instead of <a> and <router-link>-->
<template>
    <a v-if="isExternal" class="external-link" target="_blank" rel="noopener" :href="to"><slot/></a>
    <router-link v-else class="internal-link" v-bind="$props"><slot/></router-link>
</template>

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