<template>
    <div class="listView">
        <listviewTop :playlist="state.playlist"></listviewTop>
        <playList :playlist="state.playlist" ></playList>
    </div>

</template>

<script>
import listviewTop from '@/components/ListView/ListViewTop.vue'
import playList from '@/components/ListView/PlayList.vue'
import { getPlayListDetail } from '@/api/index';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store/index.js';

export default {
    setup() {
        const route = useRoute()
        let state = reactive({
            list: [],
            playlist: {
                creator:{},
                tracks:[]
            }
        })
        onMounted(async () => {
            let result = await getPlayListDetail(route.query.id);
            state.playlist = result.data.playlist
            store.commit('setPlayList', state.playlist.tracks)
            // console.log(state.playlist.tracks);
            // console.log(state.playlist);
        })
        return {
            state
        }
    },
    components: {
        listviewTop, playList
    },
    
}
</script>

<style>
.listviewTop {
    z-index: 999;
}

</style>