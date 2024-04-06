<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    //@ts-ignore
    import { Map, TileLayer, Marker, Popup } from "svelte-map-leaflet";

    let posts: Post[] = [];
    let mapOptions = { center: [17, 74.2], zoom: 6 };

    onMount(async () => {
        await fetch("/api/get-posts")
            .then((response) => response.json())
            .then((data) => {
                posts = data.posts;
            });
        let sum = [0, 0];

        for (const post of posts) {
            (sum[0] += post.lat), (sum[1] += post.long);
        }

        mapOptions = {
            ...mapOptions,
            center: [
                sum[0] / posts.length || 13.2,
                sum[1] / posts.length || 74.5,
            ],
        };
    });
</script>

{#if posts.length}
    <div class="map">
        <Map options={mapOptions}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                name="map"
            ></TileLayer>
            {#each posts as post}
                <Marker latLng={[Number(post.lat), Number(post.long)]}>
                    <Popup name={post.title}>
                        <div>
                            <h1>{post.title}</h1>
                        </div>
                    </Popup>
                </Marker>
            {/each}
        </Map>
    </div>
{/if}

<style>
    .map {
        width: 67rem;
        height: 500px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background-color: #f0f0f0;
        overflow: hidden;
    }
</style>
