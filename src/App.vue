<template>
<div>
  <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/static">Static</router-link> |
            <router-link to="/dynamic">Dynamic</router-link> |
            <router-link to="/test">Test</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <button id="refresh-button" v-if="updateExists" @click="refreshApp"><i class="fa fa-refresh"></i> Click to refresh!</button>
        <div v-show="showMessage" id="notification">
            <p>
                Get the code from <a href="https://github.com/pdhoward/vuesocket" target="_blank">this repository</a>. <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>.
            </p>
            <button type="button" @click="hideMessage"><i class="fa fa-times"></i></button>
        </div>
        <router-view/>
    </div>
  
</div>
</template>

<script>

export default {
  name: `App`,  
   data() {
        return {
            showMessage: true,
            blogPost: 'https://www.blog.plint-sites.nl/how-to-add-push-notifications-to-a-progressive-web-app/',
            // refresh variables
            refreshing: false,
            registration: null,
            updateExists: false,
        };
        },
        methods: {
            hideMessage() {
                this.showMessage = false
            },
            showRefreshUI(e) {
                this.registration = e.detail
                this.updateExists = true  
            },
            refreshApp() {
                this.updateExists = false
                if (!this.registration || !this.registration.waiting) return
                // send message to SW to skip the waiting and activate the new SW
                this.registration.waiting.postMessage('skipWaiting')
            },
        },
        created() {
            // --- 
            // Custom code to let user update the app
            // when a new service worker is available
            // --- 
            document.addEventListener('swUpdated', this.showRefreshUI, {once: true})
                                       
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (this.refreshing) return
                this.refreshing = true
                // Here the actual reload of the page occurs
                window.location.reload()
            })
        },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
button {
    font-family: 'Permanent Marker', cursive;
}
#nav {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 24px;
    padding: 30px;
    a {
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
#notification {
    position: relative;
    width: 280px;
    font-size: 12px;
    padding: 0px 24px 24px;;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    p {
        margin: 0;
    }
    a {
        color: #42b983;
    }
    button {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 0 5px 2px;
        background: #1da025;
        color: #fff;
        font-size: 13px;
        &:hover {
            cursor: pointer;
        }
    }
}
button#refresh-button {
    width: 240px;
    background: #a0251d;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    margin-bottom: 30px;
    &:focus {
        outline: none;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}

</style>