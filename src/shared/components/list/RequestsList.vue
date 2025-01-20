<script setup lang="ts">
import {Button} from "primevue";
import {FriendRequest} from "@/shared/dtos/dto";
import {useReceivedRequestsStore} from "@/features/receivedRequests/modal/store";
import NotHaveRequests from "@/shared/components/requests/NotHaveRequests.vue";
import RequestsModalSkeleton from "@/shared/skeleton/RequestsModalSkeleton.vue";



const props = defineProps({
  title: String,
  List: Array,
  isAdd: Boolean,
  loading: Boolean,
})

const requestsStore = useReceivedRequestsStore();

const handleButton = async (username:string, accept:boolean) => {
  await requestsStore.acceptReceivedRequest(username, accept);
}

</script>

<template>
  <div class="dark:bg-[#27272A] max-md:w-[95%] bg-[#D9D9D9] p-[20px] rounded-xl  border dark:border-[#454545] border-[#ADADAD] w-[850px]" >
      <p class="text-xl font-bold mt-[20px]">{{props.title}}</p>
      <div v-if="!props.loading ">
      <div class="flex flex-wrap gap-5 mt-[20px]"  v-if="props.List && props.List.length>0">
        <div v-for="item in props.List as FriendRequest[]" :key="item.id" class="flex flex-col justify-end items-center h-[300px] bg-[#EBEBEB] dark:bg-[#202024] p-[20px] rounded-lg mt-[20px] w-[250px]">
          <img :src="item.pictureURL" :alt="item.name" class="rounded-full w-[120px] object-cover bg-gray-600" />
          <div class="text-center mt-[20px] flex flex-col  gap-2">
            <p class="font-bold">{{item.username}}</p>
            <p class="font-light opacity-85">{{item.email}}</p>
            <Button v-if="props.isAdd" @click.prevent="handleButton(item.username, true)" class="w-full mt-[10px] h-[30px] font-medium "><p class="text-[14px]">Add a Friend</p></Button>
          </div>
        </div>
      </div>
      <NotHaveRequests v-else />
    </div>
    <div v-else>
      <RequestsModalSkeleton />
    </div>
  </div>
</template>